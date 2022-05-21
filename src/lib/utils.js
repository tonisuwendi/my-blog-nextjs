export const formattedDate = (date) =>
    new Date(date).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

export const imagePath = (slug, image) => `/images/posts/${slug}/${image}`;
