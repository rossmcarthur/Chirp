export const POST_CREATE_MODAL = 'POST_CREATE_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const postCreateModal = () => {
  return {
    type: POST_CREATE_MODAL
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
