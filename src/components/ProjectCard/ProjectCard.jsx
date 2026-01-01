import styles from "./ProjectCard.module.css";

const ProjectCard = ({ title, description, tags, type, image }) => (
   <div className={styles.card}>
      <div className={styles.imageWrapper}>
         <img src={image} alt={title} />
         <span className={styles.badge}>{type}</span>
      </div>
      <div className={styles.content}>
         <h3>{title}</h3>
         <p>{description}</p>
         <div className={styles.tagList}>
            {tags.map((tag) => (
               <span key={tag} className={styles.tag}>
                  {tag}
               </span>
            ))}
         </div>
         <div className={styles.actions}>
            <button className={styles.btnPrimary}>Live Demo</button>
            <button className={styles.btnOutline}>Source</button>
         </div>
      </div>
   </div>
);
