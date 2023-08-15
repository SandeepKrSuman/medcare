import React from "react";
import Backdrop from "@mui/material/Backdrop";
import { Dna } from "react-loader-spinner";
import { useAuth } from "../../AuthContext";

export default function Loader() {
  const { showLoader } = useAuth();

  return (
    <Backdrop
      sx={{
        color: "#fff",
        background:
          "radial-gradient(circle at center, rgba(255, 255, 255, 0.9) 0%, rgba(220, 220, 220, 0.7) 60%, rgba(180, 180, 180, 0.5) 100%)",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={showLoader}
    >
      <Dna
        visible={true}
        height="100"
        width="100"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </Backdrop>
  );
}
