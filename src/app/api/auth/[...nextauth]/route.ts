import NextAuth from "next-auth";

const handler = NextAuth({
  // TODO: Complete next auth for googe oauth
});

export { handler as GET, handler as POST };
