export default (state = [], action) => {
  let idx;
  let quote;
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];
    case "UPVOTE_QUOTE":
      idx = state.findIndex((quote) => quote.id === action.quoteId);
      quote = state[idx];
      return [
        ...state.slice(0, idx),
        { ...quote, votes: quote.votes + 1 },
        ...state.slice(idx + 1),
      ];
    case "DOWNVOTE_QUOTE":
      idx = state.findIndex((quote) => quote.id === action.quoteId);
      quote = state[idx];
      return [
        ...state.slice(0, idx),
        { ...quote, votes: quote.votes != 0 ? quote.votes - 1 : quote.votes },
        ...state.slice(idx + 1),
      ];
    case "REMOVE_QUOTE":
      const quotes = state.filter((quote) => quote.id !== action.quoteId);
      return [...quotes];
    default:
      return state;
  }
};
