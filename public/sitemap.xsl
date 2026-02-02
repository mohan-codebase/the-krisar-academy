<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
    xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
    exclude-result-prefixes="s">

    <xsl:output method="html" encoding="UTF-8" indent="yes" />

    <xsl:template match="/">
        <html>
            <head>
                <title>XML Sitemap</title>
                <meta charset="utf-8" />
                <style type="text/css">
                    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif; color: #333; max-width: 75rem; margin: 0 auto; padding: 2rem; }
                    table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
                    th, td { text-align: left; padding: 0.75rem; border-bottom: 1px solid #eee; }
                    th { border-bottom: 2px solid #ccc; font-weight: 600; }
                    a { color: #0066cc; text-decoration: none; }
                    a:hover { text-decoration: underline; }
                    .header { margin-bottom: 2rem; }
                    .count { color: #666; font-size: 0.875rem; font-weight: normal; }
                    h1 { margin-bottom: 0.5rem; }
                </style>
            </head>
            <body>
                <div class="header">
                    <h1>XML Sitemap</h1>
                    <xsl:if test="count(s:sitemapindex/s:sitemap) &gt; 0">
                        <p class="count">This XML Sitemap Index file contains <xsl:value-of select="count(s:sitemapindex/s:sitemap)"/> sitemaps.</p>
                    </xsl:if>
                    <xsl:if test="count(s:urlset/s:url) &gt; 0">
                        <p class="count">This XML Sitemap file contains <xsl:value-of select="count(s:urlset/s:url)"/> URLs.</p>
                    </xsl:if>
                </div>

                <!-- Sitemap Index -->
                <xsl:if test="count(s:sitemapindex/s:sitemap) &gt; 0">
                    <div style="overflow-x:auto;">
                        <table>
                            <thead>
                                <tr>
                                    <th width="70%">Sitemap Location</th>
                                    <th width="30%">Last Modified</th>
                                </tr>
                            </thead>
                            <tbody>
                                <xsl:for-each select="s:sitemapindex/s:sitemap">
                                    <tr>
                                        <td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td>
                                        <td><xsl:value-of select="s:lastmod"/></td>
                                    </tr>
                                </xsl:for-each>
                            </tbody>
                        </table>
                    </div>
                </xsl:if>

                <!-- URL Set -->
                <xsl:if test="count(s:urlset/s:url) &gt; 0">
                    <div style="overflow-x:auto;">
                        <table>
                            <thead>
                                <tr>
                                    <th width="50%">Location</th>
                                    <th width="20%">Last Modified</th>
                                    <th width="15%">Change Frequency</th>
                                    <th width="15%">Priority</th>
                                </tr>
                            </thead>
                            <tbody>
                                <xsl:for-each select="s:urlset/s:url">
                                    <tr>
                                        <td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td>
                                        <td><xsl:value-of select="s:lastmod"/></td>
                                        <td><xsl:value-of select="s:changefreq"/></td>
                                        <td><xsl:value-of select="s:priority"/></td>
                                    </tr>
                                </xsl:for-each>
                            </tbody>
                        </table>
                    </div>
                </xsl:if>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
