import * as React from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import CarouselComponent from "@/src/Components/carousel/carousel";
import { Box, IconButton } from "@mui/joy";
// import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedImage: string | null; // Accept null to handle initial render
  images: any;
  setSelectedImage: (url: string | null) => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  selectedImage,
  images,
  setSelectedImage,
}) => {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);

  function displayClick(url: string) {
    setSelectedImage(url);
    const index = images.findIndex(
      (image: any) => image?.attributes?.url === url
    );
    setCurrentIndex(index);
  }

  function handleNext() {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setSelectedImage(
      images[currentIndex === images.length - 1 ? 0 : currentIndex + 1]
        ?.attributes?.url
    );
  }

  function handlePrevious() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setSelectedImage(
      images[currentIndex === 0 ? images.length - 1 : currentIndex - 1]
        ?.attributes?.url
    );
  }

  return (
    <React.Fragment>
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="image-modal-title"
        aria-describedby="image-modal-description"
      >
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md p-4">
          <ModalClose variant="solid" sx={{ m: 1 }} size="md" color="neutral" />
          {selectedImage && (
            <div>
              <img
                src={selectedImage}
                alt="Modal Image"
                className="w-full h-full md:max-h-96 object-fill"
              />
              {/* Previous Button */}
              <div className="absolute bottom-[60%] left-6">
                <IconButton
                  onClick={handlePrevious}
                  style={{ backgroundColor: "white" }}
                >
                  <FaArrowLeftLong />
                </IconButton>
              </div>

              {/* Next Button */}
              <div className="absolute bottom-[60%] right-6">
                <IconButton
                  onClick={handleNext}
                  style={{ backgroundColor: "white" }}
                >
                  <FaArrowRightLong />
                </IconButton>
              </div>

              <CarouselComponent
                slidesDesktop={3}
                slidesTablet={2}
                titleColor="text-primary"
                showPagination={true}
                showButton={false}
                slides={images?.map((image: any, index: number) => {
                  return (
                    <img
                      key={index}
                      src={image?.attributes?.url}
                      alt={`Image ${index}`}
                      className="w-full h-36 object-cover"
                      onClick={() => displayClick(image?.attributes?.url)}
                    />
                  );
                })}
              />
            </div>
          )}
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default ImageModal;
