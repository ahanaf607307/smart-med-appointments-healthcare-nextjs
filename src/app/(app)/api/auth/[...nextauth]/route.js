import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "enter eamil" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;

        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/getUser`,
            {
              // Use absolute URL
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email, password }),
            }
          );

          if (!res.ok) {
            return null;
          }

          const user = await res.json();

          return user || null;
        } catch (error) {
          console.error("Fetch error:", error);
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/not-found",
  },

  callbacks: {
    async jwt({ token, account, user }) {
      console.log("user in jwt", user);
      if (account?.provider) {
        token.provider = account.provider;
      }

      if (user) {
        token.id = user._id || user.id;
        token.displayName = user.displayName;
        token.email = user.email;
        token.userType = user.userType;
      }

      return token;
    },
    async session({ session, token }) {
      session.provider = token.provider;

      session.user = {
        id: token.id,
        displayName: token.displayName,
        email: token.email,
        userType: token.userType,
      };

      return session;
    },
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
