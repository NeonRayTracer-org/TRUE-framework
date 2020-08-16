/** @format */

const sitemapRoutes = `
  {
    "routes": *[_type == "route"] {
      ...,
      disallowRobot,
      includeInSitemap,
      page->{
        _id,
        title,
        _createdAt,
        _updatedAt
      }
    }
  }
`

module.exports = sitemapRoutes