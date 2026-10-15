import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, AlertCircle, Info } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please specify a message subject.';
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      errs.message = 'Please provide a detailed message (at least 15 characters).';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmitted(false);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="text-xs uppercase font-bold tracking-wider text-[#B83A24] block">
          Editorial Inquiries & Reader Dispatch
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#35271F]">
          Contact TasteTrails
        </h1>
        <p className="text-[#78685D] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Have a street food tip, a heritage recipe question, or a culinary travel story to share? We’d love to hear from you.
        </p>
      </div>

      {/* Mandatory PRD Transparency Notice */}
      <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-start gap-3 text-xs sm:text-sm text-[#35271F]">
        <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="font-semibold text-amber-900 block">
            Front-End Demonstration Notice (PRD Section 11):
          </strong>
          <p className="text-amber-900/80 leading-relaxed text-xs">
            This contact submission form validates inputs locally in your browser. As no external database or SMTP mail backend is connected for this collegiate assignment, messages are validated on the client side and are not transmitted to an external inbox.
          </p>
        </div>
      </div>

      {/* Submission Success State */}
      {submitted ? (
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#284B36]/30 shadow-md text-center space-y-4">
          <div className="w-14 h-14 bg-[#284B36]/10 text-[#284B36] rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#35271F]">
            Message Validated Successfully!
          </h2>
          <p className="text-xs sm:text-sm text-[#78685D] max-w-md mx-auto leading-relaxed">
            Thank you, <strong className="text-[#35271F]">{formData.name}</strong>. Your message regarding "<em>{formData.subject}</em>" passed all front-end form validation checks.
          </p>
          <div className="p-4 bg-[#FFF6E8] rounded-xl text-xs text-[#78685D] border border-[#35271F]/10 text-left max-w-md mx-auto space-y-1">
            <p><strong>Sender Email:</strong> {formData.email}</p>
            <p><strong>Subject:</strong> {formData.subject}</p>
            <p><strong>Preview:</strong> "{formData.message.substring(0, 80)}..."</p>
          </div>
          <button
            onClick={handleReset}
            className="mt-4 px-6 py-2.5 bg-[#B83A24] hover:bg-[#9d301d] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors"
          >
            Submit Another Message
          </button>
        </div>
      ) : (
        /* Contact Form */
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 sm:p-10 rounded-2xl border border-[#35271F]/10 shadow-sm space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-[#35271F]">
                Your Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: '' });
                }}
                placeholder="e.g. Priya Sen"
                className={`w-full px-4 py-2.5 bg-[#FFF6E8]/30 border rounded-lg text-sm text-[#35271F] focus:outline-none focus:border-[#B83A24] ${
                  errors.name ? 'border-red-500' : 'border-[#35271F]/15'
                }`}
              />
              {errors.name && (
                <p className="text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-[#35271F]">
                Email Address *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: '' });
                }}
                placeholder="priya@example.com"
                className={`w-full px-4 py-2.5 bg-[#FFF6E8]/30 border rounded-lg text-sm text-[#35271F] focus:outline-none focus:border-[#B83A24] ${
                  errors.email ? 'border-red-500' : 'border-[#35271F]/15'
                }`}
              />
              {errors.email && (
                <p className="text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-[#35271F]">
              Subject *
            </label>
            <input
              type="text"
              value={formData.subject}
              onChange={(e) => {
                setFormData({ ...formData, subject: e.target.value });
                if (errors.subject) setErrors({ ...errors, subject: '' });
              }}
              placeholder="e.g. Street Food Stall Recommendation in Pune"
              className={`w-full px-4 py-2.5 bg-[#FFF6E8]/30 border rounded-lg text-sm text-[#35271F] focus:outline-none focus:border-[#B83A24] ${
                errors.subject ? 'border-red-500' : 'border-[#35271F]/15'
              }`}
            />
            {errors.subject && (
              <p className="text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.subject}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-[#35271F]">
              Message *
            </label>
            <textarea
              rows={5}
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                if (errors.message) setErrors({ ...errors, message: '' });
              }}
              placeholder="Tell us about your culinary discovery, recipe question, or reader feedback..."
              className={`w-full px-4 py-2.5 bg-[#FFF6E8]/30 border rounded-lg text-sm text-[#35271F] focus:outline-none focus:border-[#B83A24] ${
                errors.message ? 'border-red-500' : 'border-[#35271F]/15'
              }`}
            />
            {errors.message && (
              <p className="text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.message}
              </p>
            )}
          </div>

          <div className="pt-2 flex items-center justify-between">
            <span className="text-[11px] text-[#78685D]">
              * Required fields
            </span>
            <button
              type="submit"
              className="px-6 py-3 bg-[#B83A24] hover:bg-[#9d301d] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2 shadow-sm"
            >
              <Send className="w-4 h-4" />
              <span>Validate & Send Message</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
