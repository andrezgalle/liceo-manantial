export type CardMainProps = {
    id?: number;
    imageUrl: string;
    title: string;
    description: string;
}

export type ItemRecordProps = {
    id?: number;
    iconUrl: string;
    title: string;
    description: string;
}

export type TestimonialProps = {
    id: number;
    paragraph: string;
    author: string;
    role: string;
}

export type ItemAcademicLevel = {
    id: number;
    title: string;
    description: string;
}               

export type ItemChooseUsType = ItemAcademicLevel & {
    active: boolean
}