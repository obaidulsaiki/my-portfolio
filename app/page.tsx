export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 text-black dark:bg-black dark:text-white px-6 py-16">
      <div className="max-w-3xl mx-auto space-y-16">

        {/* HERO SECTION */}
        <section>
          <h1 className="text-4xl font-bold mb-2">Hi, I'm Obaidul Haque 👋</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Java Backend Developer | Competitive Programmer | AI Enthusiast
          </p>
        </section>

        {/* PROJECTS */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">🚀 Projects</h2>
          <ul className="space-y-2 list-disc list-inside text-zinc-700 dark:text-zinc-300">
            <li>LearningPoint – Tutor Management System (Spring Boot)</li>
            <li>Key2Stay – To-let Platform (ASP.NET)</li>
            <li>Samaya Attire – E-commerce (JavaFX)</li>
          </ul>
        </section>

        {/* SKILLS */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">🧠 Skills</h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            Java, Spring Boot, React, PostgreSQL, REST APIs, Machine Learning, Competitive Programming
          </p>
        </section>

        {/* CONTACT FORM */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">📩 Contact Me</h2>

          <form
            action="https://obaidulsaiki.up.railway.app/api/contact"
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 border rounded-md text-black"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 border rounded-md text-black"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full p-3 border rounded-md text-black"
              rows={4}
            />

            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-md hover:opacity-80"
            >
              Send Message
            </button>
          </form>
        </section>

      </div>
    </main>
  );
}
