import MainNavigation from "../components/MainNavigation";


function ErrorPage () {
    return(
        <>
            <MainNavigation />
            <main>
                <h1>An Error Occur!</h1>
                <p>This page could not load..</p>
            </main>
        </>
    );
};


export default ErrorPage;