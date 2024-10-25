import styles from "./PhotoModify.module.css";
import PhotoModifyDetail from "./PhotoModifyDetail";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { closeModal } from "../../../feature/seller_detail/sellerModalSlice";
import { useRef } from "react";
import { updatePhotoCard } from "../../../feature/photo_modify/PhotoModifyAPI";

import dragThumb from "./assets/drag_thumb.svg";
import backIcon from "./assets/back_icon.svg";

const PhotoModify = () => {
  const dispatch = useDispatch();

  const selectedCard = useSelector((state) => state.sellerModal.sellInfo);

  const modalContentRef = useRef(null);

  const mutation = useMutation({
    mutationFn: ({ shopId, cardId, data }) =>
      updatePhotoCard(shopId, cardId, data),
    onSuccess: () => {
      alert("수정이 완료되었습니다.");
      dispatch(closeModal());
    },
    onError: (error) => {
      alert(`수정 실패: ${error.message}`);
    },
  });

  const handleCancel = () => {
    dispatch(closeModal());
  };

  const handleModifying = (data) => {
    mutation.mutate({
      shopId: selectedCard.shopId,
      cardId: selectedCard.cardId,
      data,
    });
  };

  const handleOverlayClick = (e) => {
    if (
      modalContentRef.current &&
      !modalContentRef.current.contains(e.target)
    ) {
      dispatch(closeModal());
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div
        className={`${styles.modalContainer} ${
          selectedCard ? styles.mobileDetailContainer : ""
        }`}
        ref={modalContentRef}
      >
        <img
          src={backIcon}
          alt="back icon"
          className={`${styles.backIcon} ${
            selectedCard ? styles.mobileDetailBack : ""
          }`}
          onClick={handleCancel}
        />
        <button className={styles.closeButton} onClick={handleCancel}>
          &times;
        </button>
        <div
          className={`${styles.dragZone} ${
            selectedCard ? styles.mobileDetailThumb : ""
          }`}
          onClick={handleCancel}
        >
          <img src={dragThumb} alt="drag thumb" className={styles.dragThumb} />
        </div>
        <div className={styles.modalContent}>
          <PhotoModifyDetail
            card={selectedCard}
            onCancel={handleCancel}
            onModifying={handleModifying}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoModify;
