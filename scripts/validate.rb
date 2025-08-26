#!/usr/bin/env ruby
# Simple HTML validation script for Jekyll site

require 'html-proofer'

options = {
  # Disable external link checking for faster local validation
  disable_external: true,
  
  # Check for valid HTML structure
  check_html: true,
  
  # Check images have alt tags and valid sources
  check_img_http: true,
  
  # Check for valid Open Graph tags
  check_opengraph: true,
  
  # Allow hash hrefs for internal navigation
  allow_hash_href: true,
  
  # Ignore some files
  file_ignore: [
    # Ignore any temporary files
    /.*\.tmp$/
  ],
  
  # URL ignore patterns
  url_ignore: [
    # Ignore mailto links
    /^mailto:/,
    # Ignore tel links  
    /^tel:/,
    # Ignore local anchor links
    /^#/
  ]
}

begin
  HTMLProofer.check_directory('./_site', options).run
  puts "✅ HTML validation passed!"
rescue SystemExit => e
  puts "❌ HTML validation failed!"
  exit e.status
end
