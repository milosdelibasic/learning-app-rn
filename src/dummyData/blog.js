export const blog = [
  {
    title: "How React Native changed my life",
    author: "Milos Delibasic",
    likes: "20",
    readTime: "26 min",
    image:
      "https://media.istockphoto.com/photos/bloggingblog-concepts-ideas-with-worktable-picture-id922745190?k=20&m=922745190&s=612x612&w=0&h=TqsA7NeMPYXmK1TY5dsbdIsczaUK0OgguehHWdSUqL8=",
    date: "March 22nd 2022",
    data: [
      { type: "subtitle", content: "Subtitle 1" },
      {
        type: "text",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non ipsum ut eros tristique lacinia ac at nunc. Donec efficitur lacus nibh, ac posuere arcu rhoncus quis. Etiam faucibus dui eu magna consequat convallis. Nunc sit amet dapibus ex, ac dictum libero. Ut consectetur suscipit nunc, ut sollicitudin neque eleifend et. Praesent iaculis imperdiet sem vel dignissim. Morbi vitae faucibus lorem, ut commodo nibh.",
      },

      { type: "subtitle", content: "Subtitle 2" },
      {
        type: "image",
        content:
          "https://ae01.alicdn.com/kf/HTB1dj9NKFXXXXX8XVXXq6xXFXXXf/Pokemon-Beautiful-HUGE-WIDE-Anime-Poster-home-deco-24X42-inch-PRINT-ON-SILK.jpg",
      },
      {
        type: "text",
        content:
          "Donec vitae odio viverra, fringilla massa condimentum, sodales augue. Fusce at pulvinar risus. Ut finibus magna vel blandit commodo. Nullam vel ornare turpis. Pellentesque sit amet lacinia libero. Aliquam erat volutpat. Vestibulum vel tortor euismod, varius risus ac, viverra felis.",
      },
      { type: "divider" },
      { type: "youtube", content: "B6eL_N0N5KI" },
      {
        type: "link",
        content: "Read more about this topic",
        url: "https://reactnative.dev/",
      },
      {
        type: "code",
        content: `<FastImage
      style={styles.image}
      resizeMode={FastImage.resizeMode.cover}
      source={{ uri: blog.image }}>
      <Row spacing="flex-start" style={styles.likes, {backgroundColor: "green"}}>
        <Icon
          name="heart-outline"
          type="ionicon"
          color={gray100}
          size={sizes.h4}
        />
        <Text semiBold h6 style={styles.iconText}>
          {blog?.likes}
        </Text>
      </Row>
    </FastImage>`,
      },
    ],
  },
  {
    title: "How React changed my life",
    author: "Valentina Delibasic",
    likes: "222",
    readTime: "12 min",
    image:
      "https://media.istockphoto.com/photos/blogging-woman-reading-blog-picture-id887987150?k=20&m=887987150&s=612x612&w=0&h=vCVYGvEkLb3DuCL7DOSoNm8i78Lci4oCt7XD4HGasIg=",
    date: "March 22nd 2022",
  },
  {
    title: "Mastering JavaScript",
    author: "Milos",
    likes: "33",
    readTime: "2 min",
    image:
      "https://blog.educationecosystem.com/wp-content/uploads/2018/12/javascript-depositphotos-opt700_sm3dt7-1280x720.jpg",
    date: "March 22nd 2022",
  },
];
