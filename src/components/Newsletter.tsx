import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setStatus('success');
    setErrorMsg('');
  };

  return (
    <section className="bg-[#FFF6E8] py-16 px-4 sm:px-6 lg:px-8 border-y border-[#35271F]/10">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 sm:p-12 border border-[#35271F]/10 shadow-sm text-center">
        <div className="w-12 h-12 bg-[#B83A24]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#B83A24]">
          <Mail className="w-6 h-6" />
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#35271F] mb-3">
          How Can You Receive Weekly Culinary Stories in Your Inbox?
        </h2>
        <p className="text-[#78685D] text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
          Subscribe to TasteTrails Dispatch to receive kitchen-tested Indian recipes, honest dining reviews, and regional street food essays delivered directly to your inbox.
        </p>

        {status === 'success' ? (
          <div className="bg-[#284B36]/10 border border-[#284B36]/20 text-[#284B36] p-4 rounded-xl max-w-md mx-auto flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <div className="text-left text-xs sm:text-sm">
              <p className="font-semibold">Welcome to the TasteTrails table!</p>
              <p className="text-xs opacity-90">
                (Front-end demonstration: your email {email} was validated locally.)
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-[#FFF6E8]/50 border border-[#35271F]/20 rounded-lg text-sm text-[#35271F] placeholder-[#78685D]/60 focus:outline-none focus:border-[#B83A24]"
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#B83A24] hover:bg-[#9d301d] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors shadow-sm whitespace-nowrap shrink-0"
              >
                Subscribe
              </button>
            </div>

            {status === 'error' && (
              <div className="flex items-center gap-1.5 text-xs text-[#B83A24] text-left">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            <p className="text-[11px] text-[#78685D] mt-2">
              Note: This subscription form is a front-end demonstration for the college project. No actual emails are sent.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};
