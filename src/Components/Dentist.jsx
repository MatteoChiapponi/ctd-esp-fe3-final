import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserDetail } from "../Services/dentisService";

const Dentist = () => {
  const [dentistDetail, setDentistDetail] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getUserDetail(id).then((dentistDetail) => setDentistDetail(dentistDetail));
  }, []);
  const showDentistDetail = (
    <div>
      <h3>{dentistDetail.name}</h3>
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
    </div>
  );
  return <div>{showDentistDetail}</div>;
};

export default Dentist;
