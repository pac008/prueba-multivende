export interface Bodegas {
    entries:    Entry[];
    pagination: Pagination;
}

export interface Entry {
    _id:           string;
    name:          string;
    code:          null;
    address:       null;
    description:   null;
    type:          string;
    phoneAreaCode: null;
    phoneNumber:   null;
    latitude:      number;
    longitude:     number;
    openHours:     null;
    tags:          null;
    position:      number;
    status:        string;
    createdAt:     Date;
    updatedAt:     Date;
    CreatedById:   string;
    UpdatedById:   string;
    LocationId:    null;
    TimezoneId:    null;
    MerchantId:    string;
    SalesGroupId:  null;
}

export interface Pagination {
    offset:        number;
    limit:         number;
    total_pages:   number;
    current_page:  number;
    next_page:     number;
    previous_page: number;
    total_items:   number;
}
