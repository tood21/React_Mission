import React, { useRef } from "react";
import useOutsideClickEvent from "../../hooks/useOutsideClickEvent";
import "./MovieModal.css";

function MovieModal({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalOpen,
}) {
  const outsideRef = useRef(null);
  useOutsideClickEvent(outsideRef, setModalOpen);

  // const el = useRef();
  // const handleCloseModal = (e) => {
  //   if (setModalOpen && (!el.current || !el.current.contains(e.target)))
  //     setModalOpen(false);
  // };
  // useEffect(() => {
  //   window.addEventListener("click", handleCloseModal);

  //   return () => {
  //     window.removeEventListener("click", handleCloseModal);
  //   };
  // }, []);

  return (
    <div className="presentation">
      <div className="wrapper-modal">
        <div className="modal" ref={outsideRef}>
          <span onClick={() => setModalOpen(false)} className="modal-close">
            X
          </span>

          <img
            className="modal__poster-img"
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt="영화 포스터"
          />

          <div className="modal__content">
            <p className="modal__details">
              <span className="modal__user_perc">100% for you</span>
              {release_date ? release_date : first_air_date}
            </p>
            <h2 className="modal__title">{title ? title : name}</h2>
            <p className="modal__overview"> 평점: {vote_average}</p>
            <p className="modal__overview"> {overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
