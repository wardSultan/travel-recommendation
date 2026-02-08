interface RecommendationCardProps {
  image: string;
  title: string;
  description: string;
}

const RecommendationCard = ({ image, title, description }: RecommendationCardProps) => (
  <div className="card-hover rounded-xl overflow-hidden bg-card shadow-md border border-border">
    <div className="aspect-[3/2] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        loading="lazy"
      />
    </div>
    <div className="p-5">
      <h3 className="text-lg font-display font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  </div>
);

export default RecommendationCard;
