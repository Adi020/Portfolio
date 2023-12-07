export const handleCreateItem = (data) => {
  const createItem = ({ src, alt, text, link }) => ({
    html: (
      <>
        <img src={src} alt={alt} />
        {text && <p>{text}</p>}
      </>
    ),
    link,
  });

  const createItems = (data) =>
    data.map(({ src, alt, text, link }) =>
      createItem({ src, alt, text, link })
    );
  const items = createItems(data).map((item) => item.html);
  const links = createItems(data).map((item) => item.link);
  return [items, links];
};
