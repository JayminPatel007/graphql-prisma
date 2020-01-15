const Query = {
  comments(parent, args, { prisma }, info) {
    return prisma.query.comments(null, info);
  },
  users(parent, args, { prisma }, info) {
    return prisma.query.users(null, info);
  },
  posts(parent, args, { prisma }, info) {
    return prisma.query.posts(null, info);
  }
};

export { Query as default };
