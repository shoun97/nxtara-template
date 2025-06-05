import React from "react";

import CustomSeparator from "@components/atoms/CustomSeparator";
import ButtonGroups from "@components/molecules/ButtonGroups";

const MainCover = () => {
const openWhatsApp = () => {
  const phone = '56995098115'; // sin "+" ni espacios
  const message = encodeURIComponent('Hola, quiero más información.');
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
};

  return (
    <div id={"Home"}>
      <CustomSeparator height="64px" />
      <div className="pt-[70px]" />
      <div>
      <div className="flex flex-col gap-6 px-4 xl:px-[214px] text-white">
          <h4 className="text-primary-1 text-xl text-center md:text-2xl font-bold">
            Soluciones digitales que impulsan resultados reales
          </h4>
          <p className="mt-4 subtitle text-primary-1 text-center">
            En <b>nxtara</b> desarrollamos soluciones tecnológicas a medida que responden a las necesidades reales de tu negocio y tus usuarios.
          </p>
          <ButtonGroups
            primaryButtonLabel={"¿Hablemos?"}
            onPrimaryButtonClick={openWhatsApp}
          />
        </div>
      </div>
    </div>
  );
};

export default MainCover;
