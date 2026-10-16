'use client';

import { useState } from 'react';
import { ProjectCard } from '@/components/projects/project-card';
import { Button } from '@/components/ui/button';
import type { Project } from '@/data/projects';

const INITIAL_COUNT = 6;

interface Props {
  projects: Project[];
}

export function ProjectsShowMore({ projects }: Props) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const hasMore = visibleCount < projects.length;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {projects.slice(0, visibleCount).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {hasMore && (
        <div className="text-center mt-10">
          <Button
            onClick={() => setVisibleCount(projects.length)}
            variant="outline"
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white"
          >
            عرض المزيد من المشاريع
          </Button>
        </div>
      )}
    </>
  );
}
