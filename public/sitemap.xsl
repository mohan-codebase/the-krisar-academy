<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
    xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
    exclude-result-prefixes="s">

    <xsl:output method="html" encoding="UTF-8" indent="yes" />

    <xsl:template match="/">
        <html>
            <head>
                <title>The Krisar Academy - XML Sitemap</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <style type="text/css">
                    :root {
                        --primary: #1d4ed8;
                        --primary-light: #eff6ff;
                        --text-main: #1f2937;
                        --text-muted: #6b7280;
                        --bg-main: #f9fafb;
                        --bg-card: #ffffff;
                        --border-color: #e5e7eb;
                        --radius: 8px;
                    }

                    * {
                        box-sizing: border-box;
                        margin: 0;
                        padding: 0;
                    }

                    body { 
                        font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                        color: var(--text-main);
                        background-color: var(--bg-main);
                        line-height: 1.6;
                        padding: 2rem; 
                    }

                    .container {
                        max-width: 1000px;
                        margin: 0 auto;
                        background: var(--bg-card);
                        border-radius: var(--radius);
                        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                        overflow: hidden;
                    }

                    .header { 
                        background-color: var(--primary);
                        color: white;
                        padding: 2rem;
                        text-align: center;
                    }

                    .header h1 { 
                        margin-bottom: 0.5rem; 
                        font-size: 2rem;
                        font-weight: 700;
                    }

                    .count { 
                        color: var(--primary-light); 
                        font-size: 0.95rem; 
                        opacity: 0.9;
                    }
                    
                    .content {
                        padding: 2rem;
                    }

                    .table-responsive {
                        overflow-x: auto;
                        -webkit-overflow-scrolling: touch;
                    }

                    table { 
                        width: 100%; 
                        border-collapse: collapse; 
                        margin-top: 1rem; 
                        min-width: 600px;
                    }

                    th, td { 
                        text-align: left; 
                        padding: 1rem; 
                        border-bottom: 1px solid var(--border-color); 
                    }

                    th { 
                        border-bottom: 2px solid var(--border-color); 
                        font-weight: 600; 
                        color: var(--text-muted);
                        text-transform: uppercase;
                        font-size: 0.85rem;
                        letter-spacing: 0.05em;
                    }

                    tbody tr:hover {
                        background-color: #f8fafc;
                        transition: background-color 0.2s ease;
                    }

                    a { 
                        color: var(--primary); 
                        text-decoration: none; 
                        font-weight: 500;
                        word-break: break-all;
                    }

                    a:hover { 
                        text-decoration: underline; 
                        color: #1e40af;
                    }

                    .footer {
                        text-align: center;
                        padding: 1.5rem;
                        color: var(--text-muted);
                        font-size: 0.875rem;
                        border-top: 1px solid var(--border-color);
                        background-color: #fafafa;
                    }

                    @media (max-width: 768px) {
                        body { padding: 1rem; }
                        .header { padding: 1.5rem; }
                        .content { padding: 1rem; }
                        th, td { padding: 0.75rem; }
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>The Krisar Academy Sitemap</h1>
                        <xsl:if test="count(s:sitemapindex/s:sitemap) &gt; 0">
                            <p class="count">Mapping <xsl:value-of select="count(s:sitemapindex/s:sitemap)"/> sitemaps efficiently.</p>
                        </xsl:if>
                        <xsl:if test="count(s:urlset/s:url) &gt; 0">
                            <p class="count">Mapping <xsl:value-of select="count(s:urlset/s:url)"/> URLs across the site.</p>
                        </xsl:if>
                    </div>

                    <div class="content">
                        <!-- Sitemap Index -->
                        <xsl:if test="count(s:sitemapindex/s:sitemap) &gt; 0">
                            <div class="table-responsive">
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
                                                <td><a href="{s:loc}" target="_blank"><xsl:value-of select="s:loc"/></a></td>
                                                <td><xsl:value-of select="substring(s:lastmod, 0, 11)"/> <xsl:value-of select="substring(s:lastmod, 12, 5)"/></td>
                                            </tr>
                                        </xsl:for-each>
                                    </tbody>
                                </table>
                            </div>
                        </xsl:if>

                        <!-- URL Set -->
                        <xsl:if test="count(s:urlset/s:url) &gt; 0">
                            <div class="table-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <th width="60%">URL Location</th>
                                            <th width="20%">Last Modified</th>
                                            <th width="10%">Priority</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <xsl:for-each select="s:urlset/s:url">
                                            <tr>
                                                <td><a href="{s:loc}" target="_blank"><xsl:value-of select="s:loc"/></a></td>
                                                <td>
                                                    <xsl:choose>
                                                        <xsl:when test="string-length(s:lastmod) &gt; 0">
                                                            <xsl:value-of select="substring(s:lastmod, 0, 11)"/>
                                                            <xsl:if test="string-length(substring(s:lastmod, 12, 5)) &gt; 0">
                                                                <xsl:text> </xsl:text><xsl:value-of select="substring(s:lastmod, 12, 5)"/>
                                                            </xsl:if>
                                                        </xsl:when>
                                                        <xsl:otherwise>-</xsl:otherwise>
                                                    </xsl:choose>
                                                </td>
                                                <td>
                                                    <xsl:choose>
                                                        <xsl:when test="string-length(s:priority) &gt; 0">
                                                            <xsl:value-of select="s:priority"/>
                                                        </xsl:when>
                                                        <xsl:otherwise>-</xsl:otherwise>
                                                    </xsl:choose>
                                                </td>
                                            </tr>
                                        </xsl:for-each>
                                    </tbody>
                                </table>
                            </div>
                        </xsl:if>
                    </div>
                    
                    <div class="footer">
                        Generated for The Krisar Academy | XML Sitemap
                    </div>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
