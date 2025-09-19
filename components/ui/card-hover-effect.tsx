import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    icon: JSX.Element;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <figure
        key={item.title}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          <div className="relative">
            {/* Ajout de l'icône en haut, au centre */}
            <div className="relative flex justify-center mt-12 -mb-8 z-20">
              <div className="bg-black border-4 border-[#00fefb] w-20 h-20 rounded-full flex items-center justify-center z-30 text-[#00fefb] text-3xl">
                {item.icon}
              </div>
            </div>
            <div className="relative z-10">
              <Card>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </Card>
            </div>
          </div>
        </figure>
      ))}
    </div>
  );
};
export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 group-hover:border-[#00fefb] relative z-20 shadow-lg group-hover:shadow-xl transition-all duration-300",
        "flex flex-col justify-between min-h-[350px] group-hover:scale-105",
        className
      )}
    >
      <div className="flex-grow">{children}</div>
    </div>
  );
};


export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
  <>
    <h1 className={cn("text-slate-900 dark:text-white font-bold tracking-wide mt-4 text-center text-xl", className)}>
      {children}
    </h1>
    <div className='border-b-2 border-[#00fefb] w-16 mx-auto mt-2'></div>
    </>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-slate-600 dark:text-slate-300 tracking-wide leading-relaxed text-center text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
