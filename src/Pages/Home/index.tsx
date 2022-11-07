import { PageWrapper, Box, Image, Header } from 'Components';
import { useGetProductLimitQuery } from 'Redux/Services/queryOneProduct';

// interface HomeI {}

export default function Home(): JSX.Element {
    const { data, error, isLoading } = useGetProductLimitQuery(20);

    if (isLoading) {
        return (
            <div className="min-h-screen flex w-full h-96 bg-black/80">
                <div className="m-auto text-white">...LOADING</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex w-full h-96 bg-black/80">
                <div className="m-auto text-white">...SORRY THERE WAS A ERROR</div>
            </div>
        );
    }

    return (
        <PageWrapper>
            <Box card styles="gap-4 py-5">
                {data?.products &&
                    data.products.map(el => (
                        <Box styles="justify-self-center grid" key={el.id}>
                            <Image src={el?.images![0] as string} alt={el?.title as string} />
                            <Header className="self-end text-center font-bold py-3" title={el.title} />
                        </Box>
                    ))}
            </Box>
        </PageWrapper>
    );
}
