import { SAVE_LIKE } from "../constants";

const initialState = [];

const likeReducer = (state = initialState, action) => {
  if (action.type === SAVE_LIKE) {
    return [
      ...state,
      {
        products: [
          {
            variant_images: [
              {
                id: action.id,
                title: action.title,
                alt: action.alt,
                attachment_url_medium: action.src,
              },
            ],
          },
        ],
      },
    ];
  }
  return state;
};

export default likeReducer;
