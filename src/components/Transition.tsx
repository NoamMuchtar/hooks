import { FunctionComponent, useEffect, useState, useTransition } from "react";

interface Photo {
  id: number;
  url: string;
}

interface TransitionProps {}

const Transition: FunctionComponent<TransitionProps> = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [isPedding, startTransition] = useTransition();

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/photos?_limit=500")
        .then((res) => res.json())
        .then((data) =>
          startTransition(() => {
            setPhotos(data);
            setIsLoading(false);
          })
        )
        .catch((err) => console.log(err));
    }, 5000);
  }, []);
  return (
    <>
      <h2>Photos Gallery</h2>

      {isPedding && <p>Rendering photos....</p>}

      {isLoading && (
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only"></span>
        </div>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
        }}
      >
        {photos.map((photo) => (
          <div key={photo.id} style={{ textAlign: "center" }}>
            <img src={photo.url} width="150" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Transition;
