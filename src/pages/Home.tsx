import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty, capitalize } from "lodash";
import { getAllProducts, getProduct } from "../redux/actions/productsAction";
import {
  Box,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  const allProductsData = useSelector(
    (state: unknown) => state.product.allProductsData
  );
  const isAllProductsLoading = useSelector(
    (state: unknown) => state.product.isAllProductsLoading
  );

  function createData(id, icon, title, category, price, amount) {
    return { id, icon, title, category, price, amount };
  }

  type ProductType = {
    image: URL;
    title: string;
    category: string;
    price: number;
    rating: { count: number };
  };

  const rows = !isEmpty(productList)
    ? allProductsData.map((product: ProductType) =>
        createData(
          product?.id,
          product?.image,
          product?.title,
          product?.category,
          product?.price,
          product?.rating?.count
        )
      )
    : [];

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  useEffect(() => {
    setProductList(allProductsData);
  }, [allProductsData]);
  return (
    <Box p={2}>
      <Typography variant="h4" sx={{ color: "#212B36", marginBottom: "20px" }}>
        Product List
      </Typography>
      {isAllProductsLoading ? (
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
        <TableContainer component={Paper} sx={{ maxHeight: "80vh !important" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead
              sx={{
                backgroundColor: "#F4F6F8",
                position: "sticky",
                top: 0,
                zIndex: 1000,
              }}
            >
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Amount Count</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate(`/product/${row.id}`);
                    dispatch(getProduct(row?.id));
                  }}
                  // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ paddingLeft: "30px" }}>
                    <img src={row.icon} width={30} />
                  </TableCell>
                  <TableCell>{row.title}</TableCell>
                  <TableCell style={{ width: "20%" }}>
                    {capitalize(row.category)}
                  </TableCell>
                  <TableCell style={{ width: "15%" }}>
                    {"$" + row.price}
                  </TableCell>
                  <TableCell style={{ width: "10%" }}>{row.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default Home;
