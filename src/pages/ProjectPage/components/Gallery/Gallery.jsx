import GalleryList from '../../../../components/GalleryList/GalleryList';

export default function Gallery({ items }) {
  return (
    <section className=" py-[100px] bg-white">
      <div className="containerStyled">
        <GalleryList items={items} />
      </div>
    </section>
  );
}
