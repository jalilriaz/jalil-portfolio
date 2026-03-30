"use client";
import React from "react";
import gsap from "gsap";

export function Contact() {
  const handleForm = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const btn = document.getElementById("sbtn") as HTMLButtonElement | null;
    if (!btn) return;
    const r = btn.getBoundingClientRect();
    const evt = e.nativeEvent as MouseEvent;

    // Get form values
    const nameInput = form.querySelector('input[type="text"]') as HTMLInputElement;
    const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement;
    const subjectInput = form.querySelectorAll('input[type="text"]')[1] as HTMLInputElement | undefined;
    const messageInput = form.querySelector('textarea') as HTMLTextAreaElement;

    const senderName = nameInput?.value || '';
    const senderEmail = emailInput?.value || '';
    const subject = subjectInput?.value || 'Portfolio Contact';
    const message = messageInput?.value || '';

    const body = `Name: ${senderName}\nEmail: ${senderEmail}\n\n${message}`;
    const mailtoLink = `mailto:jalilriaz990@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');

    // Ripple effect
    const rip = document.createElement("span");
    rip.className = "ripple";
    const size = Math.max(r.width, r.height);
    rip.style.cssText = `width:${size}px;height:${size}px;left:${evt.clientX - r.left - size / 2}px;top:${evt.clientY - r.top - size / 2}px`;
    btn.appendChild(rip);
    setTimeout(() => rip.remove(), 600);

    gsap.to(btn, {
      scale: 0.96,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      onComplete: () => {
        const originalText = btn.textContent;
        btn.textContent = "✓ Sent!";
        gsap.fromTo(btn, { scale: 0.95 }, { scale: 1, duration: 0.4, ease: "back.out(2)" });
        btn.style.boxShadow = "0 0 30px rgba(0,255,224,.3)";
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.boxShadow = "";
          form.reset();
        }, 3000);
      },
    });
  };

  return (
    <section id="contact">
      <div className="cgrid">
        <div className="cleft">
          <span className="stag">Contact</span>
          <h2 className="section-title"><span className="word"><span>Let&apos;s build</span></span><br /><span className="word"><span>something epic</span></span></h2>
          <p className="ssub">Open for freelance projects, full-time roles, or just a great conversation about frontend. Drop a message — I respond within 24 hours.</p>
          <div className="socials" style={{ marginTop: "2rem" }}>
            <a href="mailto:jalilriaz990@gmail.com" className="srow2"><div className="sicon">✉</div><div className="sinfo"><div className="sname">Email</div><div className="shandle">jalilriaz990@gmail.com</div></div><span className="sarr">→</span></a>
            <a href="https://www.linkedin.com/in/jalil-riaz-5b29a4237" target="_blank" rel="noopener noreferrer" className="srow2"><div className="sicon" style={{ fontSize: ".72rem", fontWeight: 700 }}>in</div><div className="sinfo"><div className="sname">LinkedIn</div><div className="shandle">/in/jalil-riaz-5b29a4237</div></div><span className="sarr">→</span></a>
            <a href="tel:+923145475528" className="srow2"><div className="sicon">📞</div><div className="sinfo"><div className="sname">Phone</div><div className="shandle">+92 314 5475528</div></div><span className="sarr">→</span></a>
          </div>
        </div>
        <form className="cform" id="cform" onSubmit={handleForm}>
          <div className="frow">
            <div className="fg"><label>Name</label><input type="text" placeholder="Your name" required /></div>
            <div className="fg"><label>Email</label><input type="email" placeholder="you@email.com" required /></div>
          </div>
          <div className="fg"><label>Subject</label><input type="text" placeholder="What's up?" /></div>
          <div className="fg"><label>Message</label><textarea rows={5} placeholder="Tell me about your project..."></textarea></div>
          <button type="submit" className="sbtn" id="sbtn">Send Message ↗</button>
        </form>
      </div>
    </section>
  );
}
