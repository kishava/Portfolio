import Lottie from "lottie-react";
import { useEffect, useState } from "react";

type LottieAccentProps = {
  className?: string;
};

export function LottieAccent({ className = "" }: LottieAccentProps) {
  const [data, setData] = useState<object | null>(null);

  useEffect(() => {
    const url = `${import.meta.env.BASE_URL}lottie/accent-orb.json`;
    fetch(url)
      .then((r) => r.json())
      .then(setData)
      .catch(() => setData(null));
  }, []);

  if (!data) return null;

  return (
    <Lottie
      animationData={data}
      loop
      className={className}
      aria-hidden
    />
  );
}
