import { NextResponse } from "next/server";

export function BadRequestError(message = "Bad request"){
    return NextResponse.json({ message }, { status: 400 });
}

export function UnauthorizedError(message = "Unauthorized"){
    return NextResponse.json({ message }, { status: 401 });
}

export function ForbiddenError(message = "Forbidden"){
    return NextResponse.json({ message }, { status: 403 });
}

export function NotFoundError(message = "Not found"){
    return NextResponse.json({ message }, { status: 404 });
}

export function InternalServerError(message = "internal server error"){
    return NextResponse.json({ message }, { status: 500 });
}
