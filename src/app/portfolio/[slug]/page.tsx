import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProjectDetail } from "@/components/portfolio/ProjectDetail";
import { projectsContent } from "@/content/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsContent.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projectsContent.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} – Rugved Shelke`,
    description: project.overview,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const projectIndex = projectsContent.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projectsContent[projectIndex];
  const nextProject =
    projectsContent[(projectIndex + 1) % projectsContent.length];

  return (
    <main className="min-h-screen flex flex-col justify-between overflow-x-hidden">
      <Header customBackLabel="Back" customBackHref="/portfolio" />
      <div className="flex-1 w-full">
        <ProjectDetail project={project} nextProject={nextProject} />
      </div>
      <Footer />
    </main>
  );
}
