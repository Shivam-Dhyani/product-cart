import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as _ from "lodash";
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const selectedProductData = useSelector(
    (state: unknown) => state.product.selectedProductData
  );

  const isSelectedProductLoading = useSelector(
    (state: unknown) => state.product.isSelectedProductLoading
  );
  type ProductType = {
    image: URL;
    title: string;
    category: string;
    price: number;
    rating: { count: number };
  };

  useEffect(() => {
    setSelectedProduct(selectedProductData);
  }, [selectedProductData]);

  return (
    <Box p={2}>
      <Typography variant="h4" sx={{ color: "#212B36", marginBottom: "20px" }}>
        Product Details
      </Typography>
      {isSelectedProductLoading ? (
        <Box
          sx={{
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress sx={{ fontSize: "200px" }} />
        </Box>
      ) : (
        <Box>
          <Box>
            <Box
              height="70vh"
              width="100cw"
              sx={{
                display: "flex",
              }}
            >
              <Box width="50vw" p={2} height="100%">
                <img src={selectedProduct?.image} width="100%" height="100%" />
              </Box>
              <Box xs={6} px={5} py={2} height="100%" width="50vw">
                <Box p={1.5}>
                  <Button
                    variant="contained"
                    sx={{
                      background: "#FF5630",
                      fontWeight: "bold",
                      padding: 0,
                    }}
                  >
                    Sale
                  </Button>
                </Box>
                <Typography color="#00B8D9" variant="h7">
                  {_.upperCase(selectedProduct?.category)}
                </Typography>
                <Typography variant="h5" py={1.5}>
                  {selectedProduct?.title}
                </Typography>
                <Typography py={0.5} sx={{ color: "#637381" }} variant="h6">
                  Rating:{selectedProduct?.rating?.rate}
                </Typography>
                <Typography variant="h3" py={1}>
                  Price: {selectedProduct?.price}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography>Size</Typography>
                  <FormControl sx={{ m: 0.5, minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Select Your Size
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Size Chart</FormHelperText>
                  </FormControl>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography>Quantity</Typography>
                  <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Select Count
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={1}>One</MenuItem>
                      <MenuItem value={2}>Two</MenuItem>
                      <MenuItem value={3}>Three</MenuItem>
                    </Select>
                    <FormHelperText>
                      Available Count: {selectedProduct?.rating?.count}
                    </FormHelperText>
                  </FormControl>
                </Box>
                <Box
                  py={1.5}
                  sx={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      background: "#FFAB00",
                      color: "#212B36",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    Add to Cart
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      background: "#00AB55",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    Buy Now
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box mt={6} px={4}>
            <Typography fontWeight="bold">Description</Typography>
            <Typography>
              {_.capitalize(selectedProduct?.description)}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Product;
