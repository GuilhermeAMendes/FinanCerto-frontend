// External Library
import { useRouter } from "next/navigation";

export const useNavigationHandler = () => {
  const router = useRouter();

  const navigateTo = (href: string) => {
    router.push(href);
  };

  return { navigateTo };
};
