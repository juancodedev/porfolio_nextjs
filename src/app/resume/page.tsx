import type { Metadata } from "next";
import ResumeClient from "./ResumeClient";

export const metadata: Metadata = {
    title: "Resume",
    description: "Juan Muñoz's resume — experience, education, and skills as a Full Stack Developer.",
};

export default function ResumePage() {
    return <ResumeClient />;
}