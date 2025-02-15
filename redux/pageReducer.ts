import { createSlice } from "@reduxjs/toolkit";
export interface RootState {
  name: string;
  pages: {
    HeroBackgroundImage: {
      image: {
        url: string;
      };
      text: string;
    };
    Carousel: {
      text: string;
      imagesCollection: {
        items: {
          url: string;
        }[];
      };
    };
  };
}

const homeReducer = createSlice({
  name: "home",
  initialState: {
    name: "Home",
    pages: {
      HeroBackgroundImage: {
        image: {
          url: "",
        },
        text: "",
      },
      Carousel: {
        text: "",
        imagesCollection: {
          items: [],
        },
      },
    },
  },
  reducers: {
    setPage: (state, action) => {
      state.pages = action.payload;
    },
  },
});

export const { setPage } = homeReducer.actions;
export default homeReducer.reducer;
