import React, { useState } from "react";
import ButtonDisplay from "./ButtonDisplay";
import Form from "./Form";

export default function HireMe({ handleHireClick }) {

    const [isSendMail, setIsSendMail] = useState(false)
    return (
        <>
            <section
                id="hire-me"
                className="min-h-screen bg-zinc-950 text-zinc-100 vsm:pt-20 pt-20 px-6 vsm:px-4 relative flex items-center w-full justify-center"
            >
                {!isSendMail ?
                    <div className="max-w-4xl mx-auto sm:mt-5">
                        {/* Card */}
                        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-10 shadow-xl">

                            {/* Heading */}
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Work With{" "}
                                <span className="text-reddish-color">Me</span>
                            </h2>

                            {/* Divider */}
                            <div className="w-16 h-1 bg-reddish-color rounded-full mb-6" />

                            {/* Pitch */}
                            <p className="text-zinc-300 leading-relaxed mb-6">
                                I’m a full-stack web developer focused on building clean, modern,
                                and scalable web applications. I specialize in React and the MERN
                                stack, with hands-on experience in real-time apps, dashboards,
                                and API-driven systems. Open to internships, freelance projects,
                                and junior developer roles.
                            </p>

                            {/* Skills */}
                            <div className="mb-8">
                                <h3 className="text-lg font-semibold mb-3 text-zinc-200">
                                    What I Can Help With
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        "React & Tailwind UI",
                                        "MERN Stack",
                                        "Real-time Apps (Socket.IO)",
                                        "REST APIs",
                                        "Authentication",
                                        "Responsive Design",
                                    ].map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-4 py-1.5 text-sm rounded-full
                  bg-zinc-800 border border-zinc-700
                  text-zinc-200 hover:border-reddish-color transition"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Availability */}
                            <div className="mb-10">
                                <p className="text-zinc-400">
                                    <span className="text-zinc-200 font-medium">Available for:</span>{" "}
                                    Internships · Freelance · Junior Roles
                                </p>
                                <p className="text-zinc-400">
                                    <span className="text-zinc-200 font-medium">Work mode:</span>{" "}
                                    Remote / Hybrid
                                </p>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <button onClick={() => setIsSendMail(true)}
                                    className="px-6 py-3 rounded-xl bg-reddish-color
              hover:bg-red-500 transition font-medium"
                                >
                                    Email Me
                                </button>

                                <a
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-6 py-3 rounded-xl border border-zinc-700
              hover:border-red-500 transition font-medium"
                                >
                                    LinkedIn
                                </a>

                                <a target="_blank"
                                    download
                                    rel="noreferer"
                                    href="/Resume_Kritan.pdf"
                                    className="px-6 py-3 rounded-xl border border-zinc-700
              hover:border-red-500 transition font-medium"
                                >
                                    Download Resume
                                </a>
                            </div>

                        </div>
                    </div>
                    :
                    <div className="w-2/3 vsm:w-full sm:w-3/4">
                        <button onClick={() => setIsSendMail(false)}
                            className="px-6 py-3 rounded-xl border-reddish-color border
              hover:bg-red-500 transition font-medium"
                        >
                            Back
                        </button>
                        <Form />
                    </div>
                }
            </section>

        </>
    );
}
