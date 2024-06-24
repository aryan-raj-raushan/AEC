import React, { useEffect } from "react";
import Swal from "sweetalert2";

interface SuccessModalProps {
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ onClose }) => {
  // Close the modal automatically after 4 seconds
  useEffect(() => {
    // Display SweetAlert when component mounts
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Review Submitted Successfully",
      showConfirmButton: false,
      timer: 1500,
    });

    // Close the modal after 4 seconds
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div>
     
    </div>
  );
};

export default SuccessModal;
