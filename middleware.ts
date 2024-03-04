import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({
  publicRoutes: ["/ru","uz"],
  ignoredRoutes: ["/"],
});

 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
