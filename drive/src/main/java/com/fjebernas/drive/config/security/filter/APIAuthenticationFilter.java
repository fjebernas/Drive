package com.fjebernas.drive.config.security.filter;

import com.fjebernas.drive.config.security.authenticationRequest.APIAuthenticationRequest;
import com.fjebernas.drive.config.security.manager.APIAuthenticationManager;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Slf4j
@AllArgsConstructor
@Component
public class APIAuthenticationFilter extends OncePerRequestFilter {

  private final APIAuthenticationManager apiAuthenticationManager;

  @Override
  protected void doFilterInternal(
          HttpServletRequest request,
          HttpServletResponse response,
          FilterChain filterChain
  )
          throws ServletException, IOException {

    String keyRequest = request.getHeader("x-api-key");

    APIAuthenticationRequest authenticationRequest = new APIAuthenticationRequest(false, keyRequest);

    Authentication authentication = apiAuthenticationManager.authenticate(authenticationRequest);

    if (authentication.isAuthenticated()) {
      SecurityContextHolder.getContext().setAuthentication(authentication);
      filterChain.doFilter(request, response);
    } else {
      response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
    }
  }
}
