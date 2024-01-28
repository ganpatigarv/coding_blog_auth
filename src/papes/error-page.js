import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" style={{backgroundSize:"100% 100%"}}>
      <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred. {JSON.stringify(error.data)}</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}