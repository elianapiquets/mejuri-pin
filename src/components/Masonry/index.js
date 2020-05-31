import React from "react";
import PropTypes from "prop-types";
import Loading from "../Loading";
import { Container } from "./styles";
import Card from "../Card";
import Error from "../Error";


function Masonry({ isLoading, page, error }) {
  return (
    <React.Fragment>
        {!isLoading &&
          page && (
            <Container>
              {page.map((image) =>
                image.products.map((product) =>
                  product.variant_images.map((variant) => (  
                      <Card
                        src={variant.attachment_url_medium}
                        title={variant.alt}
                        key={variant.id}
                        id={variant.id}
                      />
                  ))
                )
              )}
            </Container>
          )}
        {error && <Error />}
        {isLoading && <Loading />}
      
    </React.Fragment>
  );
}
Masonry.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  page: PropTypes.array.isRequired,
  error: PropTypes.string,
};

export default Masonry;
