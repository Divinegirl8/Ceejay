interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    imageSrc?: string;
    imageAlt?: string;
    imageOnLeft?: boolean;
  }
  
  const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    tags,
    imageSrc,
    imageAlt = "Project image",
    imageOnLeft = true
  }) => {
    return (
      <div className="px-20 pt-5">
        <div className="border-t border-gray-300 py-16">
          <div className={`flex flex-col ${imageOnLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-stretch`}>
            
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              {imageSrc ? (
                <img 
                  src={imageSrc} 
                  alt={imageAlt}
                  className="w-full h-auto rounded-lg"
                />
              ) : (
                <div className="w-full h-[400px] bg-gray-300 rounded-lg"></div>
              )}
            </div>
  
            {/* Content Section */}
            <div className="w-full md:w-1/2 flex flex-col  justify-between">
               <div>
               <h2 className="text-[32px] md:text-[40px] font-medium text-[#000000] mb-4">
                {title}
              </h2>
              <p className="text-[25px] text-[#626262] mb-6 leading-tight flex-grow">
                {description}
              </p>
               </div>
              <div className="flex flex-wrap gap-3">
                {tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 border border-[#CBCBCB] font-normal rounded-full text-[12px] text-[#626262]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
  
          </div>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;