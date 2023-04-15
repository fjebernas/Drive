package com.fjebernas.drive.config.security.manager;

import com.fjebernas.drive.config.security.provider.APIAuthenticationProvider;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderNotFoundException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;

@AllArgsConstructor
@Component
public class APIAuthenticationManager implements AuthenticationManager {

  private final APIAuthenticationProvider apiAuthenticationProvider;

  @Override
  public Authentication authenticate(Authentication authentication) throws AuthenticationException {

    if (apiAuthenticationProvider.supports(authentication.getClass())) {
      return apiAuthenticationProvider.authenticate(authentication);
    }

    throw new ProviderNotFoundException("No provider found");
  }
}
