export class definition {
    _id?: string; // optional property, can be null
    authorName: string = "";
    dateCreated: string = ""; // Date to string
    definition?: string = "";
    quality?: Number = 0;
    likes?: Number = 0;
}
export class AddDefinition {
    constructor(
        public authorName: string = "",
        public dateCreated: string = "",
        public definition: string = "",
        public quality: Number = 0,
        public likes: Number = 0) { }
}

export class englishTerm {
    _id?: string;
    wordEnglish: string;
    wordNonEnglish?: string;
    wordExpanded?: string;
    languageCode: string;
    image?: string;
    imageType?: string;
    audio?: string;
    audioType?: string;
    linkAuthoritative?: string;
    linkWikipedia?: string;
    linkYouTube?: string;
    authorName: string;
    dateCreated: string; // Date to string
    dateRevised: string; // Date to String
    fieldOfStudy?: string;
    helpYes?: Number;
    helpNo?: Number;
    definitions?: definition[];
}

export class AddEnglish {
    constructor(
        public wordEnglish: string,
        public wordNonEnglish: string = "",
        public wordExpanded: string = "",
        public languageCode: string = "en",
        public image: string = "",
        public imageType: string = "",
        public audio: string = "",
        public audioType: string = "",
        public linkAuthoritative: string,
        public linkWikipedia: string,
        public linkYouTube: string,
        public authorName: string,
        public dateCreated: string,
        public dateRevised: string,
        public fieldOfStudy: string,
        public helpYes: Number = 0,
        public helpNo: Number = 0,
        public definitions: [AddDefinition]
    ) { }
}

export class nonEnglishTerm {
    _id?: string;
    wordEnglish: string;
    wordNonEnglish: string;
    wordExpanded: string;
    languageCode: string;
    image?: string;
    imageType?: string;
    audio: string;
    audioType: string;
    linkAuthoritative?: string;
    linkWikipedia?: string;
    linkYouTube?: string;
    authorName: string;
    dateCreated: string; // Date to string
    dateRevised: string; // Date to string
    fieldOfStudy: string;
    helpYes: Number;
    helpNo: Number;
    definitions: definition[];
    termEnglishId: string;
}

export class AddNonEnglish {
    constructor(
        public wordEnglish: string,
        public wordNonEnglish: string,
        public wordExpanded: string,
        public languageCode: string,
        public image: string,
        public imageType: string,
        public audio: string,
        public audioType: string,
        public linkAuthoritative: string,
        public linkWikipedia: string,
        public linkYouTube: string,
        public authorName: string,
        public dateCreated: string, // Date to string
        public dateRevised: string, // Date to string
        public fieldOfStudy: string,
        public helpYes: Number = 0,
        public helpNo: Number = 0,
        public definitions: [AddDefinition],
        public termEnglishId: string
    ) { }
}


export class languageCodes {
    _id: string;
    name: string;
    code: string;
}