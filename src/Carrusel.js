import { Carousel } from 'react-carousel-minimal';

function Carusel() {
 const data = [
    {
      image: "https://example.com/auto-part1.jpg",
      caption: "Motor"
    },
    {
      image: "https://example.com/auto-part2.jpg",
      caption: "Neumáticos"
    },
    {
      image: "https://example.com/auto-part3.jpg",
      caption: "Transmisión"
    },
    {
      image: "https://example.com/auto-part4.jpg",
      caption: "Frenos"
    },
    {
      image: "https://example.com/auto-part5.jpg",
      caption: "Suspensión"
    },
    {
      image: "https://example.com/auto-part6.jpg",
      caption: "Escape"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="red"
            pauseIconSize="40px"
            slideBackgroundColor="black"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Carusel;
