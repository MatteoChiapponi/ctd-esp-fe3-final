import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserDetail } from "../Services/dentisService";
import "./dentist.css"

const Dentist = () => {
  const [dentistDetail, setDentistDetail] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getUserDetail(id).then((dentistDetail) => setDentistDetail(dentistDetail));
  }, []);
  const showDentistDetail = (
    <>
      <h1>{dentistDetail.name}</h1>
      <p>- contacto: {dentistDetail.email}</p>
      <p>- contacto: {dentistDetail.phone}</p>
      <p>- contacto: {dentistDetail.website}</p>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        back
      </button>
    </>
  );
  return <main className="detail-container">{showDentistDetail}</main>;
};

export default Dentist;
