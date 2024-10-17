import PhotoSelling from "../../components/modals/photo_selling/PhotoSelling";

const BuyerDetailPage = () => {
  const imageCards = [
    {
      id: 1,
      title: "카드1",
      genre: "풍경",
      grade: "COMMON",
      price: 3,
      counts: 4,
      imageUrl: "/images",
    },
    {
      id: 2,
      title: "카드2",
      genre: "자연",
      grade: "RARE",
      price: 4,
      counts: 5,
      imageUrl: "/images",
    },
    {
      id: 3,
      title: "카드3",
      genre: "도시",
      grade: "SUPER RARE",
      price: 5,
      counts: 6,
      imageUrl: "/images",
    },
  ];
  return (
    <>
      <div>
        <PhotoSelling imageCards={imageCards} />
      </div>
    </>
  );
};

export default BuyerDetailPage;
